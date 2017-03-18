/*
 * The data here is/may be copyrighted and NOT included in the MIT license.
 */
var mechArmorTypes = Array(
	{
		name: {
			"en-US": "Standard"
		},
		tag: "standard",
		crits: {
			clan: 0,
			is: 0
		},
		armormultiplier: {
			clan: 16,
			is: 16
		},

		costmultiplier: 10000,
		introduced: 2470,
		extinct: 0,
		reintroduced: 0
	},
	{
		name: {
			"en-US": "Ferro Fibrous"
		},
		tag: "ferro-fibrous",
		armormultiplier: {
			clan: 16 * 1.2,
			is: 16 * 1.12
		},
		crits: {
			clan: 7,
			is: 14
		},
		costmultiplier: 20000,
		introduced: 2571,
		extinct: 2810,
		reintroduced: 3040
	},

	{
		name: {
			"en-US": "Light Ferro Fibrous"
		},
		tag: "light-ferro-fibrous",
		armormultiplier: {
			clan: 0,
			is: 7
		},
		crits: {
			clan: 0,
			is: 16 * 1.06
		},
		costmultiplier: 15000,
		introduced: 3067,
		extinct: 0,
		reintroduced: 0
	},

	{
		name: {
			"en-US": "Heavy Ferro Fibrous"
		},
		tag: "light-ferro-fibrous",
		armormultiplier: {
			clan: 0,
			is: 16 * 1.24
		},
		crits: {
			clan: 0,
			is: 21
		},
		costmultiplier: 25000,
		introduced: 3069,
		extinct: 0,
		reintroduced: 0
	},

	{
		name: {
			"en-US": "Stealth"
		},
		tag: "stealth",
		armormultiplier: {
			clan: 0,
			is: 16
		},
		crits: {
			clan: 0,
			is: 12
		},
		crit_locs: {
			"ra": 2,
			"rl": 2,
			"rt": 2,
			"la": 2,
			"ll": 2,
			"lt": 2
		},
		costmultiplier: 50000,
		introduced: 3063,
		extinct: 0,
		reintroduced: 0
	}
);
