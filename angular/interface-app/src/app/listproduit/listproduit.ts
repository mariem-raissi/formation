import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-listproduit',
  imports: [CommonModule,RouterLink],
  templateUrl: './listproduit.html',
  styleUrl: './listproduit.css',
})
export class Listproduit {
produits=[
  {name:'SVR' ,
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.6ybZjjX5nqOdVXvt7PE-fQHaHa%3Fpid%3DApi&f=1&ipt=55bcd9d1d9147a3fcfc74ebe6903af897941d0f006866388dbfc6cfed0777a1b&ipo=images'
  },
  {name:'VICHY',
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.6WkSsi5QAWpChiJ-tLzqzgHaHa%3Fpid%3DApi&f=1&ipt=905c3c4edb31a1b1a6aba41efb9245c16ca2aec0608654a2f1af0f44928dd04d&ipo=images'

  },  
  {
    name:'AVENE',
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.4vLAWgu3PS8aZilalKww0gHaHa%3Fpid%3DApi&f=1&ipt=d8cf40b1cf204c2f738b6683d3585ce0de479c36008d3076af585edaf3a91fcc&ipo=images'
  },
  {
    name:'BIODERMA',
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.AQfGysbtZCcvWFGk49kDsAHaHa%3Fpid%3DApi&f=1&ipt=2012d4bfdaff4966e2a2332089b593f95ca8c332a97a4bdb8e24f3be49eb95ea&ipo=images'
  },
  {
    name:'CERAVE',
    img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.oxdxbTlzCCTaQwPwhZDXEAHaJQ%3Fpid%3DApi&f=1&ipt=2d7186a050570be3240a28c2b4ef5a6a8781fe24eb3f73aaa91846ea4da0e1c3&ipo=images'
  }
]
;
}
