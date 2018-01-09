
var elForm, elSelectPackage, elPackageHint, elTerm, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerm = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');


function packageHint() {
    var pack = this.options[this.selectedIndex].value;
    if (pack === 'monthly') {
        elPackageHint.textContent = 'Save $ 10 if you pay for 1 year!!!';
    } else { 
        elPackageHint.textContent = 'Wise choice!!!';
    }
}

function checkTerms(event)
{
    if(!elTerm.checked)
    {
        elTermsHint.textContent = 'You must agree to the terms.';
        event.preventDefault();
    }
   
}


elForm.addEventListener('submit', function(evente) 
                                  {checkTerms(event);
                                }, 
                                false);
elSelectPackage.addEventListener('change', packageHint, false);