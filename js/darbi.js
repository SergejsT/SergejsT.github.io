var d = document;
let quant = document.getElementById("f_quantity");
let summ = document.getElementById("f_summa");
let maxi = document.getElementById("f_maxim");

let funy = document.getElementById("f_fun");

var names;
var quantity;
var price;
let row_quantity = 0;
let product = [];
function PD_forma_addRow() {
    row_quantity++;

    names = d.getElementById('PD_input_form_name').value;
    quantity = d.getElementById('PD_input_form_quantity').value;
    price = d.getElementById('PD_input_form_price').value;



    var quantit = quantity*1;
    var summa = quantity * price;
    var maxim = 0;
    if (price > 10) {
        maxim = summa;
    }
    product.push([quantit, summa, maxim]);
 
    var rows;
    var colums;
    var sum = product[0].slice();
    for( rows = 1; rows < product.length; rows++) {
      for( colums = 0; colums < product.length; colums++) {
        sum[colums] += product[rows][colums];
      }
    }
    quant.innerHTML = sum[0];
    summ.innerHTML = sum[1];
    maxi.innerHTML = sum[2];
    
    var tbody = d.getElementById('PD_table').getElementsByTagName('TBODY')[0];

    var row = d.createElement("TR");
    tbody.appendChild(row);

    var td1 = d.createElement("TD");
    var td2 = d.createElement("TD");
    var td3 = d.createElement("TD");
    var td4 = d.createElement("TD");
    var td5 = d.createElement("TD");
    var td6 = d.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);

 
    td1.innerHTML = row_quantity;
    td2.innerHTML = names;
    td3.innerHTML = quantity;
    td4.innerHTML = price;
    td5.innerHTML = summa;
    td6.innerHTML = maxim;
}



var numb;

function PD_forma_fun() {
    numb = d.getElementById('PD_input_form_fun').value;
    var numb1 = numb*1 + 1
    f_fun.innerHTML = "Jūs uzminējāt " + numb + ", bet es - " + numb1 + ". Man ir vairāk, es uzvarēju!";
}

function qqqq(zz){
    if (zz == 1) {
        document.body.className = 'new_class1';

    } else if (zz == 2){
        document.body.className = 'new_class2';

    } else {
        document.body.className = 'new_class3';

    }
 }

$(document).ready(function(){
   
    $('ul.catalog_tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.container').find('div.catalog_content').removeClass('active').eq($(this).index()).addClass('active');
      });
      

});
