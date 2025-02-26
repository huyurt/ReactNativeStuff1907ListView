import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import BlogContextStateHook from '../context/BlogContextStateHook';

const IndexScreenStateHook = () => {
    const {blogPosts, addBlogPost} = useContext(BlogContextStateHook);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title='Post Ekle' onPress={addBlogPost}/>
            <FlatList
                data={blogPosts}
                keyExtractor={data => data.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreenStateHook;
