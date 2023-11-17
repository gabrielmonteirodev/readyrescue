import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';  // Importe o LinearGradient

const CarrinhoPage = ({ navigation }) => {
    // Exemplo de dados do carrinho
    const cartItems = [
        { name: 'Luva', quantity: 2, price: 3 },
        { name: 'Curativo', quantity: 1, price: 5 },
        // Adicione os demais produtos aqui...
    ];

    const [total, setTotal] = useState(0);

    // Função para calcular o total da compra
    const calcularTotal = () => {
        let novoTotal = 0;
        cartItems.forEach((item) => {
            novoTotal += item.quantity * item.price;
        });
        setTotal(novoTotal);
    };

    // Função para renderizar os itens do carrinho
    const renderCartItems = () => {
        return cartItems.map((item, index) => (
            <View key={index} style={styles.cartItemContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Image source={require('../../assets/iconsMenu/iconeInfarto.png')} style={styles.productImage} />
                <Card containerStyle={styles.selectorContainer}>
                    <View style={styles.selectorButtons}>
                        <TouchableOpacity style={styles.circleButton} onPress={() => handleRemoveFromCart(item.name)}>
                            <FontAwesome name="minus" size={14} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.circleButton} onPress={() => handleAddToCart(item.name)}>
                            <FontAwesome name="plus" size={14} color="black" />
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        ));
    };

    const groupedItems = [];
    while (cartItems.length > 0) {
        groupedItems.push(cartItems.splice(0, 4));
    }

    return (
        <LinearGradient
            colors={['rgba(255, 1.06, 1.06, 0.20)', 'rgba(208.25, 132.76, 132.76, 0)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
        >
            <View style={styles.container}>
                {/* Botão de retorno */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <FontAwesome name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>

                {/* Título e imagem */}
                <View style={styles.header}>
                    <Image source={require('../../assets/iconsLoja/maleta.png')} style={styles.headerImage} />
                    <Text style={styles.title}>Formas de Pagamento</Text>
                </View>

                {/* Itens do carrinho */}
                <ScrollView style={styles.cartItemsContainer}>
                    {groupedItems.map((group, groupIndex) => (
                        <View key={groupIndex} style={styles.cartItemsRow}>
                            {group.map((item, index) => (
                                <View key={index} style={styles.cartItem}>
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Image source={require('../../assets/iconsLoja/gaze.png')} style={styles.productImage} />
                                    <Card containerStyle={styles.selectorContainer}>
                                        <View style={styles.selectorButtons}>
                                            <TouchableOpacity style={styles.circleButton} onPress={() => handleRemoveFromCart(item.name)}>
                                                <FontAwesome name="minus" size={14} color="black" />
                                            </TouchableOpacity>
                                            <Text style={styles.quantityText}>{item.quantity}</Text>
                                            <TouchableOpacity style={styles.circleButton} onPress={() => handleAddToCart(item.name)}>
                                                <FontAwesome name="plus" size={14} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    </Card>
                                </View>
                            ))}
                        </View>
                    ))}
                </ScrollView>

                {/* Cálculo e total */}
                <View style={styles.totalContainer}>
                    <Text style={styles.calculationText}>Gaze 2x R$3,00</Text>
                    <Text style={styles.calculationText}>Atadura 1x R$5,00</Text>
                    <Text style={styles.calculationText}>Desconto R$0,00</Text>
                    <Text style={styles.calculationText}>Total R${total.toFixed(2)}</Text>
                </View>

                {/* Forma de pagamento */}
                <View style={styles.paymentContainer}>
                    <TouchableOpacity style={styles.addCardButton}>
                        <FontAwesome name="credit-card" size={20} color="black" />
                        <Text style={styles.paymentText}>Cadastrar novo cartão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addCardButton}>
                        <FontAwesome name="qrcode" size={20} color="black" />
                        <Text style={styles.paymentText}>Gerar Pix QR CODE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.finishButton}>
                        <Text style={styles.finishButtonText}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
    },
    header: {
        alignItems: 'center',
        marginTop: 50,
    },
    headerImage: {
        width: 150,
        height: 120,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: '#000',
    },
    cartItemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 10,
    },
    cartItemsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    cartItem: {
        flex: 1,
        margin: 5,
    },
    cartItemContainer: {
        marginBottom: 20,
        backgroundColor: '#ccc',
    },
    productImage: {
        width: 70,
        height: 90,
        // marginVertical: 15,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
    },
    productName: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000',
        marginBottom: 5,
    },
    selectorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    circleButton: {
        marginLeft: 3,
        marginRight: 3,
        width: 20,
        height: 20,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectorButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityText: {
    },
    totalContainer: {
        margin: 20,
        marginTop: 0,
    },
    calculationText: {
        fontSize: 16,
        marginBottom: 5,
    },
    paymentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    addCardButton: {
        alignItems: 'center',
    },
    paymentText: {
        marginTop: 5,
    },
    finishButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        borderWidth: 0.5,
        elevation: 5,
    },
    finishButtonText: {
        color: '#FF0000',
        fontWeight: 'bold',
    },
});

export default CarrinhoPage;
