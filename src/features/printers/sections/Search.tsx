import SearchComponent from "@/features/printers/components/Search";
import Filter from "../components/Filter";
export default function SearchSection() {
    return (
        <div className="container px-6 md:px-8 lg:px-6 sm:mt-36 relative z-10">
            <section className="bg-white py-6 px-4 sm:px-10 rounded-xl flex items-stretch justify-between sm:flex-row flex-col gap-4 sm:shadow-sm border sm:border-0 shadow-xs">
                <SearchComponent />
                <div className="contents" >

                    <Filter className="text-base ms-auto font-medium rounded-xl border-[#0B646854] border h-15.25! w-full sm:w-60" items={[{ label: "location", value: "location" }]} defaultValue="location" />
                    <Filter className="text-base font-medium rounded-xl border-[#0B646854] border h-15.25! w-full sm:w-60" items={[{ label: "sort by", value: "sort_by" }]} defaultValue="sort_by" />
                </div>
            </section>

        </div>
    );
}
