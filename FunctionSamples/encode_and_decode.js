const kTest = "FRED" //variable to test function
const kTest2 = 1234 //numeric variable to test function also
const kTest3 = "Luis"

//function to account for input values less than 4 and non string values
function PadWithZeros(fStr)
{
   while(fStr.toString().length<4)
   {
      fStr = '0' + fStr
   }
   return fStr
}

function EncodeString(fString)
{
   let fEncodedValue = '' //variable to hold encoded value,
                          // must start as empty string to avoid undefined
    //using for loop to use charcodeat
   for(let i=0; i<fString.length; ++i)
   {
      //call padwithzero function, to add zeros and convert to string
      //charcode at uses utf-16 and returns integer
      fEncodedValue += PadWithZeros((fString.charCodeAt(i)))
   }
    console.log(fEncodedValue)
    return fEncodedValue
}

function DecodeToString(fNumericValue)
{
   let fDecodedValue = '' //variable to hold decoded value
   //using for loop, to iterate in 4s to skip zeros
    for(let j=0; j<fNumericValue.length; j+=4)
    {
        //String creates string
        //fromCharCode is the reverse of charCodeAt
        //substring returns specific characters similar to splice
        fDecodedValue +=String.fromCharCode(fNumericValue.substring(j, j+4))
    }
    console.log(fDecodedValue)
    return fDecodedValue
}

let TestDecode = EncodeString(kTest2)
DecodeToString(TestDecode)