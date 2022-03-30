
export interface Product {
	id: number; 
	name: string; 
	price: number; 
	preview: string;
	description: string; 
    }
    
    export const products = [
	{   id:1, 
	    name: "Autographed picture of the Black Rifle Coffee CEO", 
	    price: 699.99,
	    preview: 'Be you Be Andy',
	    description: ' Andy Stumpf'
	}, 
	{   id: 2,
	    name: "JT's Fat Clothes", 
	    price: 50000, 
	    preview: 'Buy Now before he gets fat again',
	    description: 'Before he gets fat again'
	}, 
	{   id:3,
	    name: "Starship Troopers: The Logan Stark Reboot", 
	    price: 200000, 
	    preview: 'Would you like to know more',
	    description: 'Do you want to know more'
	}
    ];