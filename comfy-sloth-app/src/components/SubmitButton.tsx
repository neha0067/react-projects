import { useNavigation } from "react-router-dom"

function SubmitButton({ text }: any) {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting"

  return (
    <button className="btn bg-yellow-800 text-white tracking-wider" type="submit">
        {
            isSubmitting ? <>
                <span className="loading loading-spinner"></span>
                Sending...
            </> : text || "submit"
        }
    </button>
  )
}

export default SubmitButton