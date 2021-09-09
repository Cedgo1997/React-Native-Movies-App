import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (<Image source={{ uri }} style={{ width: 50, height: 50, borderRadius: 10 }} />)
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        height: 50,
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,

        elevation: 3,
        marginRight: 10,
        paddingRight: 8,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 5,
    }
})
