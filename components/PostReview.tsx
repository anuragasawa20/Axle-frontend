'use client';

import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-hot-toast";
import axios from "axios";
import StarRatingInput from './StarRatingInput';

function PostReview({slug}:any) {
    const [selectedRating, setSelectedRating] = useState(5);
    const [comment, setComment] = useState('');
    const closeDialogRef:any = useRef(null);
    const handleRatingChange = (rating:any) => {
        setSelectedRating(rating);
    };
    const handleCommentChange = (event:any) => {
        setComment(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://kind-pear-puffer-tie.cyclic.cloud/api/comments/upload', 
            
            {
                game_slug: slug, 
                media: ["comment_media_url_1", "comment_media_url_2"],
                comment: comment,
                rating: selectedRating,
                like_count: 0
            }
            ,
            {
                headers:{ 'authorization': `${localStorage.getItem('authToken')}`}
              }
            );
            console.log('Response:', response.data);
            toast.success('Review submitted successfully!');
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to submit the review.');
        }
    };

    return (
        <Dialog>
           <DialogClose  ref={closeDialogRef}/>
            <DialogTrigger>
            <Button variant={'outline'}>
            Post a Review
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <div className='p-10'>
                            <h2 className="text-3xl font-bold py-4">Post a review</h2>
                            <StarRatingInput onRatingChange={handleRatingChange}/>
                            <p>Selected Rating: {selectedRating}</p>
                            <textarea rows={5} value={comment} onChange={handleCommentChange} className='p-2 my-4 w-full bg-transparent border-2 border-white/50 focus:outline-none' placeholder='Write Your Comment...'/>
                            <Button variant={'landing'} className='w-full' onClick={handleSubmit}>Submit</Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default PostReview;
