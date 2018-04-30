var lit = String.raw `ECLAC subregional headquarters for the Caribbean supported the Planning Institute of Jamaica during its 10th Biennial Dialogue for Development: The Jamaica We Want: Vision 2030-Advancing the SDGs, Leaving No One Behind (5 December 2017, Kingston, Jamaica) by providing substantive assistance for the Dialogue for Development lecture that focused on the localization of the SDG goals and targets to the Jamaican development context.  From 2014 to 2017, ECLAC ran the Development Account project: Strengthening national capacities to design and implement rights-based policies and programmes that address care of dependent populations and women's economic autonomy in urban development and planning. The project benefited the countries of Latin American and the Caribbean, and in particular, the seven cities that are at the core of the project: Bogotá (Colombia); Mexico City (Mexico); Cuenca (Ecuador); Montevideo (Uruguay) Havana (Cuba); Santiago (Chile); San Salvador (El Salvador).    A relevant result of the project has been to incorporate the articulation between urban and care policies into the academic and political debate at the local level, as well as the expansion of the analysis, including empirical evidence, regarding the importance of the development and management of cities for the formulation of care programmes and services and their impact on women's economic autonomy. All the study cases and the lesson and knowledge learned on this project was a substantial material for a book published on December 2017 called \\u00BFQui\\u00E9n cuida en la ciudad?: aportes para pol\\u00EDticas urbanas de igualdad (Who cares in the city? Contributions for urban policies of equality).  This project is synergic to the 2030 Agenda, as it recognizes gender equality and the autonomy of women as fundamental factors in moving towards sustainable development. The project is also accordance with the SDGs, specially with SDG 11 - make cities and human settlements inclusive, safe, resilient and sustainable \\u2013 and target 5.4 (recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies \\u2026).    Also, ECLAC organized a course on Development planning and gender perspective for staff of the different local governments of the region.     During the Conference of the Cities in 2017 (Santiago) a capacity building workshop on sustainable urban development was implemented with the participation of several countries of the region. ECLAC is providing technical assistance to cities in disaster risk management \\u2013 in Baranquilla (Colombia), Angra dos Reis (Brasil) and Chacabuco (Chile)- and a capacity building project for monitoring of urban SDGs in conjunction with UN Habitat (2 countries TBD) is planned for 2018.    In Argentina, an adaptation of ECLAC's gap analysis methodology  at the subnational level was applied aligned with the 2030 Agenda. This methodology has been applied in two provinces  (see http://repositorio.cepal.org/bitstream/handle/11362/40836/1/S1601120_es.pdf  and  http://repositorio.cepal.org/bitstream/handle/11362/42075/1/S1700688_es.pdf), and plans are being developed to apply it in two more, with the goal of establishing sub national baselines for some SDGs in the country.`;

var newlit = "";
for (var i = 0; i < lit.length; i++) {

    if (lit.charAt(i) == '\\' && lit.charAt(i + 1) == 'u') {
        let c = lit.substr(i + 2, 4);
        let un = '0x' + c;
        //console.log(String.fromCharCode(un));
        newlit += String.fromCharCode(un);
        i += 5;
    } else if (lit.charAt(i) == '\\' && lit.charAt(i + 1) == '"') {
        newlit += '\\"';
        i += 1;
    } else if (lit.charAt(i) == '\\') {
        //don't add anything
    } else {
        //console.log(lit.charAt(i));
        newlit += lit.charAt(i);
    }
}

console.log(newlit);