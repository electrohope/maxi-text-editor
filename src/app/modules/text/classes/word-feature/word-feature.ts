export class WordFeature {
    index: number;
    text: string;
    features: string[] = [];

    constructor(text: string,index: number){
        this.text = text;
        this.index = index;
    }

    toggleFeature(feature: string){
        if(this.features.indexOf(feature) < 0){
           this.addFeature(feature);
        }else{
           this.deleteFeature(feature)
        }
    }
    
    addFeature(feature: string){
        this.features.push(feature);
    }

    deleteFeature(feature: string){
        this.features = this.features.filter((item)=>{
            return item !== feature;
        })
    }

    getFeatures(){
        return this.features
    }
}
