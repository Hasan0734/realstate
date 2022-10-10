import { toast } from 'react-hot-toast';

export const showErr = err =>{

    err?.name && toast
    .error(err.name.message)
    err?.email && toast
        .error(err.email.message)
    err?.password && toast
        .error(err.password.message)
    err?.password_confirmation && toast
        .error(err.password_confirmation.message)


    // Category
    err?.category_name && toast
        .error(err.category_name.message)
    err?.category_id && toast
        .error(err.category_id.message)

    // Story

    err?.title && toast
        .error(err.title.message)
    err?.summary && toast
        .error(err.summary.message)
    err?.tags && toast
        .error(err.tags.message)
    err?.category_id && toast
        .error(err.category_id.message)

    // contact

    err?.phone && toast
    .error(err.phone.message)
    err?.message && toast
        .error(err.message.message)

}

export const toastErr = err =>{
     toast
        .error(err[0])
}

