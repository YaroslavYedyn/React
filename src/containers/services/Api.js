export class Api{
    url = 'http://localhost:8090/cars';


    getAllCars(){
return fetch(this.url)
    .then(value => value.json())
    .then(value => {return value})
    }
    getCarById(id){
        console.log('ftc');
        return  fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }
  async  getShowCars(startId){
        let carById1 = await this.getCarById(startId);
        let carById2 = await this.getCarById(++startId);
        let carById3 = await this.getCarById(++startId);
        let carById4 = await this.getCarById(++startId);
        return {carById1,carById2,carById3,carById4}

    }
}
