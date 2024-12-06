import {observer} from "mobx-react-lite";


interface StarRatingProps {
    rating: number;
    totalStars?: number;
}


const StarRating = ({ rating, totalStars = 5 }:StarRatingProps) => {
    // Создаем массив звезд
    const stars = Array.from({ length: totalStars }, (_, index) => (
        <svg
            key={index}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={index < rating ? "gold" : "none"}
            stroke={index < rating ? "gold" : "gray"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ));

    return <div style={{ display: 'flex', gap: '4px' }}>{stars}</div>;
};
export default observer(StarRating);