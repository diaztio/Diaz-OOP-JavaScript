class Kucing{
    bersuara(){
        console.log("Meong...");
    }
}
class Anjing{
    bersuara(){
        console.log("Guk guk...")
    }
}
class Zamzam{
    bersuara(){
        console.log("Guk guk...")
    }
}
const hewan = [new Kucing(), new Anjing()];
hewan.forEach(hewan => hewan.bersuara());

const hewan3 = new Zamzam();
hewan3.bersuara();

//Buat file baru polimorfisme PPLG
//Buat 2 method skillCoding, levelcoding