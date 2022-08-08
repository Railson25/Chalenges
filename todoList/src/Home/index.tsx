import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import LogoImg from '../assets/logo.png'
import AddButton from '../assets/addButton.png'

export function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.headerImage}
                    source={LogoImg}
                />
                <Text style={styles.headerTextOne}>To</Text>
                <Text style={styles.headerTextTwo}>do</Text>
            </View>
            
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                {/* <Text style={styles.contentText}>Testandoooaooasoidi</Text> */}
            </View>
        </View>
    )
} 