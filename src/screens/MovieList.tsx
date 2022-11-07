import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState, Suspense } from 'react'
import RouteConstant from '../navigations/RouteConstant';
import MovieCard from '../components/MovieCard';
import { IMovieList } from '../types/Type';
import { getMovies } from '../server/Api';
import common from '../constants/common';


// import React, { Suspense } from 'react';
const Component = React.lazy(() => import('../components/MovieCard'));

export default function MovieList() {
    const [page, setPage] = useState(1);

    const [newData, setNewData] = useState<IMovieList[]>([]);
    const [pageNumber, setPageNumber] = useState(2);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async () => {
        setIsLoading(true);
        await getMovies(page)
            .then((response) => {
                setNewData([...newData!, ...response?.data?.results]);
                setPageNumber(response?.data.total_pages);
                setIsLoading(false);
            });
    };

    useMemo(() => {
        console.log('useMemo_part1');

        fetchMovies();
    }, [page]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Paginated List</Text>
            </View>
            <FlatList
                data={newData}
                renderItem={({ item }) => (

                    <Suspense fallback={<ActivityIndicator />}>
                        <Component
                            onPress={() => {
                                // props.navigation.navigate(RouteConstant.MovieList, item.id);
                            }}
                            movie={item} />
                    </Suspense>

                )}
                keyExtractor={(item) => item.title + item.id + item.release_date + item.vote_count}

                onEndReached={() => {
                    if (page < pageNumber) {
                        setPage(page + 1);
                    }
                }}
                onEndReachedThreshold={20}
                ListHeaderComponent={() => {
                    return (
                        <View>
                            {isLoading && (
                                <ActivityIndicator
                                    style={styles.activityIndicator}
                                    size="large"
                                    color="#ff0000"
                                />
                            )}
                        </View>
                    );
                }}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        alignSelf: "auto",
    },
    container: {
        flex: 1,
        // flexDirection: "row",
        backgroundColor: common.colors.grey200,
        paddingLeft: common.WP(4),
        paddingRight: common.WP(4),
        paddingTop: common.WP(2),
    },
    header: {
        fontSize: common.WP(5),
        marginVertical: common.WP(2),
    },
})