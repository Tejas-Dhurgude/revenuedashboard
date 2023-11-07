
import './weekReport.scss'

export default function WeekReport() {
    function getFormattedMonthWeek() {
        const currentDate = new Date();
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
        const monthName = months[currentDate.getMonth()];
        const weekNumber = Math.ceil((currentDate.getDate() + (currentDate.getDay() - 1 || 6)) / 7);
    
        return `${monthName}-Week ${weekNumber}`;
    }
    const formattedDate = getFormattedMonthWeek();
  return (
    <div className="weekReport">
        <div className="title">
            {formattedDate}
        </div>
        
    </div>
  )
}
