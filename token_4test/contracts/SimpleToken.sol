// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./base/ERC20.sol";
import "./base/SafeERC20.sol";

contract SimpleToken is ERC20 {
    using SafeERC20 for IERC20;

    constructor(uint256 initialSupply) ERC20("Test-Token", "T_Token") {
        _mint(msg.sender, initialSupply* (10**uint256(18)));
    }

    function safeTransfer(address to, uint256 amount) external {
        IERC20 token = IERC20(address(this));
        token.safeTransfer(to, amount);
    }
}
