const NewOrder = (name, email, address, phone, items, total) => {
    return{
        buyer: {
            name:name,
            email:email,
            address:address,
            phone:phone,
            items:items,
            total:total,
            createdAT: new Date().toLocaleDateString()
        }
    }
}

export default NewOrder