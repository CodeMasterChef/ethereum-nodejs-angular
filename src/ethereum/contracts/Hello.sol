pragma solidity ^0.4.23;
contract Hello {

    string private message;
 
    function setMessage(string mes) public {
        message = mes;
    }
    
    function getMessage() public view returns(string) {
        return message;
    }
   
}