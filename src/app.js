export class App{

    constructor() {



    }

    configureRouter(config, router){

        config.title = 'Test';
        config.map([
          
            { route: ['','one'], moduleId: 'one',   title: 'One', nav: true },
            { route: 'two', moduleId: 'two',   title: 'Two', nav:true },
          //  { route: 'three', moduleId: 'three',   title: 'Three', nav:true },
           // { route: 'four', moduleId: 'four',   title: 'Four', nav:true },

        ]);

        this.router = router;
        console.log(router)
    }

}