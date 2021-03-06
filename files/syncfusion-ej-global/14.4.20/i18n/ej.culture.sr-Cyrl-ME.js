ej.addCulture( "sr-Cyrl-ME", {
	name: "sr-Cyrl-ME",
	englishName: "Serbian (Cyrillic, Montenegro)",
	nativeName: "српски (Црна Гора)",
	language: "sr-Cyrl",
	numberFormat: {
		",": ".",
		".": ",",
		negativeInfinity: "-бесконачност",
		positiveInfinity: "+бесконачност",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["недеља","понедјељак","уторак","сриједа","четвртак","петак","субота"],
				namesAbbr: ["нед","пон","уто","сри","чет","пет","суб"],
				namesShort: ["не","по","ут","ср","че","пе","су"]
			},
			months: {
				names: ["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],
				namesAbbr: ["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy.",
				D: "d. MMMM yyyy.",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy. H:mm",
				F: "d. MMMM yyyy. H:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy."
			}
		}
	}
});
