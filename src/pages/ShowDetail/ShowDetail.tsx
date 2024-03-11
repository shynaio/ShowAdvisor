import { useState } from "react";
import { ShowDetails } from "../../types/show";

export const ShowDetail = ({id}: {id: string}) => {
    const [showDetail, setShowDetail] = useState<ShowDetails | undefined>();

    const renderShowDetails = () => {
        if (!showDetail) return 'No show details found!';
        
        return (
            <>
                Homepage: <span>{showDetail?.homepage}</span>
            </>
        )
    }

    return (
        <div>
            { renderShowDetails() }
        </div>
    );
};