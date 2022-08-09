import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import LogoImg from '../assets/logo.png'
import ClipBoard from '../assets/Clipboard.png'

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
            
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.contentHeaderTextOne}>Criadas</Text>
                    <Text style={styles.contentHeaderTextTwo}>Concluidas</Text>
                </View>
                
                <View style={styles.empityList}>
                    <Image 
                        source={ClipBoard }
                        width={56}
                        height={56}
                    />
                    <Text style={styles.empityListTextOne}>Você ainda não tem tarefas cadastradas </Text>
                    <Text style={styles.empityListTextTwo}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
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
        </View>
    )
} 