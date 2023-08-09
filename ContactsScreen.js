import React from 'react';
import { FlatList, View } from 'react-native';
import Contact from './componet/contact';

const ContactsScreen = () => {
    const contacts =[
        {name: 'Hajia Amish', number:'023-254-0782'},
        {name: 'Mary Atto', number:'024-119-6369'},
        {name: 'Rashedatu Amin', number:'054-194-0789'},
        {name: 'Rosemond Arthur', number:'024-294-0789'},
        {name: 'Joyce Adzo', number:'0241-940-783'},
    ]
    return (
        <View>
            <FlatList
            data = {contacts}
            renderItem={({item}) =>{
                return <Contact name={item.name} phone={item.number} />
            }}
            keyExtractor={(item)=> item.number}
            />
                
           
        </View>
    );
}

export default ContactsScreen;
