/*


transmissionParse("1410::<932829840830053761>") ===>  
==>
{
   id: 1410,
   rawData: 932829840830053761
}





Take in a transmission string and return an object.

Return -1 if the transmission does NOT contain "::".

Returned object should contain an id property

    (The value of id is the part of the transmission before the "::")

The id property should be of type Number

Returned object should contain a rawData property

    (The value of rawData is the part of the transmission after the "::")

Return -1 for the value rawData if the rawData part of the transmission does NOT start with < and end with >


BONUS:
Trim leading and trailing whitespace from transmission.
Return -1 if the id part of the transmission cannot be converted to a number.
Return -1 if more than one "::" is found in transmission.
Do not include the < > symbols in the value assigned to rawData.
Return -1 for the value of rawData if anything besides numbers are present between the < > symbols.

*/
import { expect } from 'chai';
import {transmissionParse} from '../src/transmission.js'

describe("TRANSMISSION", function () {
    it("Take in a transmission string and return an object",function(){
        expect(transmissionParse("1410::<932829840830053761>")).to.be.an('object');
    })

    it(" Return -1 if the transmission does NOT contain ::",function(){
        expect(transmissionParse("1410<932829840830053761>")).to.equal(-1);
    })

    it(" Returned object should contain an id property",function(){
        expect(transmissionParse("1410::<932829840830053761>").id).to.not.be.undefined;
    })

    it(" The id property should be of type Number",function(){
        expect(transmissionParse("1410::<932829840830053761>").id).to.be.a('number');
        expect(transmissionParse("1410::<932829840830053761>").id).to.equal(1410);
    })

    
    it(" Returned object should contain a rawData property",function(){
      
        expect(transmissionParse("1410::<932829840830053761>").rawData).to.not.be.undefined;
        expect(transmissionParse("1410::<932829840830053761>").rawData).to.equal("932829840830053761");
   
    })
    it("Return -1 for the value rawData if the rawData part of the transmission does NOT start with < and end with >",function(){
        expect(transmissionParse("1410::<932829840830053761")).to.equal(-1);
        expect(transmissionParse("1410::932829840830053761")).to.equal(-1);
        expect(transmissionParse("1410::932829840830053761>")).to.equal(-1);
    })
    
    
   
})