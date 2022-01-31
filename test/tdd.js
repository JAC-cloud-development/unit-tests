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
*/
import { expect } from 'chai';
import {transmissionParse} from '../src/transmission.js'

describe("TRANSMISSION", function () {
    it("TEST",function(){
        expect(true).to.equal(true);
    })
})