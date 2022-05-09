// SPDX-License-Identifier: UNLICENSED

pragma solidity ^ 0.8.0;
/*You will implement a smart contract that powers an online shopping website. 

This website sells items. Each item has their own name, image URL, description, inventory (items left)
, price (in ETH and membership points), and membership points gained per item purchased. Each item is looked up using their unique SKU.
As mentioned above, there is a membership system in place. With the purchase of every item, a certain amount of points are earned. 
Each user can later use their points balance to redeem items.
For the shop administrator, there are functions in place that allow them to add, disable,
 and edit items, as well as a dedicated restock function. They also need a way to withdraw Ether.
For shoppers, there is a function for them to purchase an item. No refunds are available.*/

import '@openzeppelin/contracts/access/Ownable.sol';
import './InterfaceShop.sol';

contract Shop is Ownable, IShop {
    
    struct item {
        string name;
        string image_url;
        string description;
        uint inventory;
        uint price_eth;
        uint price_points;
        uint points_gained;
        bool disabled;
    }

    mapping(bytes32 => item) public items;
    mapping(address => uint) public user_points;

    function addItem(
        string calldata name,
        string calldata imageUrl,
        string calldata description,
        uint256 amount,
        uint256 price,
        uint256 points
        ) external override onlyOwner() {
            bytes32 SKU = generateSku(name);
            if (bytes(items[SKU].name).length > 0) {
                revert("Item exists");
            }
            items[SKU] = item(name,imageUrl, description, amount, price, points, points, true);
            emit ItemAdded(SKU);
            emit ItemRestocked(SKU, amount);

        }

    function disableItem(bytes32 sku) external override onlyOwner() {
        if (bytes(items[sku].name).length == 0) {
             revert("Item doesn't exist");
        }
        items[sku].disabled = true;
        emit ItemDisabled(sku);
    }

    function enableItem(bytes32 sku) external override onlyOwner() {
         if (bytes(items[sku].name).length == 0) {
             revert("Item doesn't exist");
        }
        items[sku].disabled = false;
        emit ItemEnabled(sku);
    }

    function editItem(
        bytes32 sku,
        string calldata imageUrl,
        string calldata description,
        uint256 price,
        uint256 points
     ) external override onlyOwner() {
         if (items[sku].price_points == 0) {
             revert("Item doesn't exist");
         }
         items[sku].image_url = imageUrl;
         items[sku].description = description;
         items[sku].price_eth = price;
         items[sku].price_points = points;
         items[sku].points_gained  = points;
         emit ItemEdited(sku);
    }
    
    function restockItem(bytes32 sku, uint256 amount) external override onlyOwner() {
        items[sku].inventory += amount;
        emit ItemRestocked(sku, amount);
    }


    function buy(        
        bytes32 sku,
        uint256 amount,
        bool usePoints) external override payable {
        if (items[sku].price_points == 0) {
            revert("Item doesn't exist");
        }
        if (items[sku].disabled == true) {
            revert('Item disabled');
        }
        if (usePoints) { 
            if (msg.value > 0) {
                revert("Don't send Ether");
            }
            uint price =  items[sku].price_points * amount;
            require(user_points[msg.sender] >= price, "Not enough funds");
            user_points[msg.sender] -= price;
            user_points[msg.sender] += items[sku].price_points;
        } else {
            if (msg.value != items[sku].price_eth * amount) {
                revert("Bad Ether value");
            }
            user_points[msg.sender] += items[sku].points_gained;
        }
        items[sku].inventory -= amount;
        emit ItemBought(sku, amount, msg.sender);
    }

      /*  function buy(bytes32 sku, uint256 amount, bool usePoints ) external override payable {
            if (bytes(items[sku].image_url).length == 0) {
                revert("Item doesn't exist");
            }
            if (items[sku].disabled == true) {
                revert("Item disabled");
            }
            if (!usePoints) {
                if (msg.value != items[sku].price_eth) {
                    revert("Bad Ether value");
                }
            }
        }*/

        function getItem(bytes32 sku)
        external
        view
        override
        returns (
            string memory name,
            string memory imageUrl,
            string memory description,
            uint256 amount,
            uint256 price,
            uint256 points,
            bool disabled
        )  {

            return (items[sku].name, items[sku].image_url, items[sku].description, items[sku].inventory, items[sku].price_eth, items[sku].price_points, items[sku].disabled);
        }

    function withdraw() external override onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function getPoints(address user) external override view returns (uint256) {
        return user_points[user];
    }

    function generateSku(string memory name) public pure override returns (bytes32) {
        return keccak256(abi.encode(name));
    }

}