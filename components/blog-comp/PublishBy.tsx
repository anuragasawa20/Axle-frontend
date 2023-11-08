import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function PublishBy() {
    return (
        <div className="blog-publisher">
            <div>
                <h5> Sagar Nirwal</h5>
                <a>@sn247776</a>
            </div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default PublishBy