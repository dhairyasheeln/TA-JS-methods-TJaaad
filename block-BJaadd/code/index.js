let colors=['red','green','blue','grey','orange'];
let join=colors.join(); //red,green,blue,grey,orange
join=colors.join(',');//red,green,blue,grey,orange
join=colors.join('');//redgreenbluegreyorange
join=colors.join(' ');//red green blue grey orange
join=colors.join(99);//red99green99blue99grey99orange
console.log(join);