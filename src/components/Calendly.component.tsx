import { PopupButton } from "react-calendly"

export const Calendly = () => {
  return (
	<section className="bg-gray-100 shadow rounded-2xl inline-block p-4">
		<PopupButton
        url="https://calendly.com/testsard25/30min"
        rootElement={document.getElementById("root")!}
        text="📅 Agendar reunión"
      />
	</section>
  )
}