
export interface Product {
	id: number; 
	name: string; 
	price: number; 
	productImage: string;
	preview: string;
	description: string; 
    }
    
    export const products = [
	{   id:1, 
	    name: "Autographed picture of the Black Rifle Coffee CEO", 
	    price: 69,
	    productImage: 'https://lh3.googleusercontent.com/_2QQ6RtQ9QRfAQ3bu2jEhL7ZZPjxJ038lKwfgAVaof9krJMPK8dS0beiSAw80akI4umU9xJBbB8HhWC53-J-imYyhvzQaHe1uy776jQYTvGmmzle6RCJLW3Ys0GfNOHy_KjeD9JY7Q=w2400',
	    preview: 'Be you Be Andy',
	    description: ' Andy Stumpf'
	}, 
	{   id: 2,
	    name: "JT's Fat Clothes", 
	    price: 42,
	    productImage: 'https://lh3.googleusercontent.com/VeBYEhiz-tl5Ui5d--XKscCtsCHRt9jwOZTj0QuSvqeXU9OxJChwuf0oLLkCVhS0np9QRlTSBT3GrjHcSPXodLxeSmdFrSckVnzDlMI3lFGQiosMaAl4vs-Pqym-cxzSCFAnPREXnQ=w2400',  
	    preview: 'Buy Now before he gets fat again',
	    description: 'Are you NOT a fat phobic son of a bitch? Do you believe that there is more to life than being able  to look down and see your own dick? Then JTs is fat clothes is something that you need for your wardrobe. What once was donned by the Chris Farley-esque body that used to belong to Black Rifle Coffees Jarred Taylor, can now be yours for the low low price of $19.95Are you NOT a fat phobic son of a bitch? Do you believe that there is more to life than be able to look down and see your dick? ',
	}, 
	{   id:3,
	    name: "Starship Troopers: The Logan Stark Reboot", 
	    price: 20, 
	    productImage: 'https://lh3.googleusercontent.com/fcv2Ig72-cYfBKhgnJw2AseTiM42alnFKVrOYgnHhsLuLHl6tn6S5_-08oMYmwKUNtePT-nGtQMC9CEEgZRvI3gGNaShWJ1AEfG_Fjf5D7_KHv57XGAo1K01loetmbRFWkBAaUFcRg=w2400',
	    preview: 'Would you like to know more',
	    description: 'Do you want to know more'
	}
    ];