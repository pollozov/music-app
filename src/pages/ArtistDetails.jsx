import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

    console.log('id art', artistId)

    if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;

    if (error) return <Error />;

    return(
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} artistData={artistData} /> */}
            {artistData ? (
              <RelatedSongs 
                data={artistData?.data[0].relationships.albums.data}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
              />
            ) : null}
            
        </div>
    );
};

export default ArtistDetails;
