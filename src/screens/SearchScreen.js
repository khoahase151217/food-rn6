import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        // price = '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>
                We have found {results.length} results
            </Text> */}
            <ScrollView>
                <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultList results={filterResultsByPrice('$$')} title="Bit Pricer" />
                <ResultList results={filterResultsByPrice('$$$')} title="Bit Spender" />
                <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultList results={filterResultsByPrice('$$')} title="Bit Pricer" />
                <ResultList results={filterResultsByPrice('$$$')} title="Bit Spender" />
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen