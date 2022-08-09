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
                    <View style={styles.contentHeaderElements}>
                        <Text style={styles.contentHeaderTextOne}>Criadas</Text>
                        <View style={styles.contentCounter}><Text style={{color: '#D9D9D9'}}>0</Text></View>
                    </View>
                    <View style={styles.contentHeaderElements}>
                        <Text style={styles.contentHeaderTextTwo}>Concluidas</Text>
                        <View style={styles.contentCounter}><Text style={{color: '#D9D9D9'}}>0</Text></View>
                    </View>
                </View>
                
                <View style={styles.emptyList}>
                    <Image 
                        source={ClipBoard }
                        width={56}
                        height={56}
                    />
                    <Text style={styles.emptyListTextOne}>Você ainda não tem tarefas cadastradas </Text>
                    <Text style={styles.emptyListTextTwo}>Crie tarefas e organize seus itens a fazer</Text>
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