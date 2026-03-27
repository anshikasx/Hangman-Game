function getButtonStyling(styleType){
    if(styleType == "primary"){
        return "bg-blue-500 hover:bg-blue-600";
    }
    else if(styleType == "secondary"){
        return "bg-gray-500 hover:bg-gray-600";
    }
    else if(styleType == "error"){
        return "bg-red-500 hover:bg-red-600";
    }
    else if(styleType == "success"){
        return "bg-green-500 hover:bg-green-600";
    }
    else if(styleType == "warning"){
        return "bg-orange-500 hover:bg-orange-600";
    }
}

export default getButtonStyling;