import {Basic} from "unsplash-js/dist/methods/photos/types";
function isPortrait(pic: Basic): boolean {
    return pic.width < pic.height;
}

const createPattern = (pictures:Basic[], pattern:("l" | "p")[])=>{
    const result:Basic[] = []
    const landscapes:Basic[] = [];
    const portraits:Basic[] = [];

    for(const pic of pictures){
        if(isPortrait(pic)){
            portraits.push(pic);
            continue;
        }
        landscapes.push(pic);
    }
    let index = 0;
    while(landscapes.length || portraits.length){
        const type = pattern[index % pattern.length];
        switch (type){
            case "l":
                if(landscapes.length > 0){
                    result.push(landscapes.shift()!)
                }
                break;
            case "p":
                if(portraits.length > 0){
                    result.push(portraits.shift()!)
                }

        }
        index ++;
    }
    return result;
}

export default createPattern;





