// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Proyecto is Ownable{
    address public comprador;
    address public vendedor;
    address public arbitro;
    
    bool public depositoOk;
    bool public compradorOk;
    bool public pagoOk;

    uint public montoPago;

    modifier onlyComprador(){
        require(msg.sender==comprador,"No es el comprador");
        _;
    } 

    constructor(address _comprador, address _vendedor, address _arbitro, uint _monto){

    }

    function depositoPago() payable public onlyComprador{
        require(msg.value==montoPago, "No es el importe correcto");
        depositoOk= true;
    }

    function compradorConfirmaOk() public onlyComprador{
        compradorOk=true;
    }

    function retiraPago() public{
        payable(vendedor).transfer(montoPago);
        pagoOk=true;
    }

    function pagarPorArbitro() public onlyOwner{
        payable(vendedor).transfer(montoPago);
        pagoOk=true;
    }
}