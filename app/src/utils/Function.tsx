export const EmailPasswordValidation = (form: { email: string; password: string }) => {
    let filter = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let letter = /[a-zA-Z]/;
    let number = /[0-9]/;

    if(!filter.test(form.email)){
        return false;
    }

    if(form.password.length < 4 || form.password.length > 9 || !letter.test(form.password) || !number.test(form.password)){
        if(form.password.length < 4){
            return false;
        }
        if(form.password.length > 9){
            return false;
        }
        if(!letter.test(form.password)){
            return false;
        }
        if(!number.test(form.password)){
            return false;
        }
    }
    return true;
}

export  const NameEmailPasswordValidation = (form: { name: string; email: string; password: string }) => {
    let filter = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let English = /[a-zA-Z]/;
    let number = /[0-9]/;

    if(!Korean.test(form.name) && !English.test(form.name)){
        return false;
    }

    if(!filter.test(form.email)){
        return false;
    }

    if(form.password.length < 4 || form.password.length > 9 || !English.test(form.password) || !number.test(form.password)){
        if(form.password.length < 4){
            return false;
        }
        if(form.password.length > 9){
            return false;
        }
        if(!English.test(form.password)){
            return false;
        }
        if(!number.test(form.password)){
            return false;
        }
    }
    return true;
}