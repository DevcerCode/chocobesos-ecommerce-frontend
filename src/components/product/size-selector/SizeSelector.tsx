// import { Size } from "@/interface"
// import clsx from "clsx"

// interface Props {
// selectedSize?: Size
// availableSize?: Size[]
// }

// export const SizeSelector = ({ availableSize, selectedSize }: Props) => {
export const SizeSelector = () => {
    return (
        <div className="my-5">
            <h3 className="font-bold mb-4">Tallas disponibles</h3>

            <div className="flex">
                {
                    // availableSize?.map(size => (
                    //     <button
                    //         key={size}
                    //         className={
                    //             clsx(
                    //                 "mx-2 hover:underline text-lg",
                    //                 {
                    //                     'underline': size === selectedSize
                    //                 }
                    //             )
                    //         }
                    //     >
                    //         {size}
                    // </button>
                    // ))
                }
            </div>
        </div>
    )
}
