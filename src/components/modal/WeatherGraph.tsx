import { HourlyWeatherTypes } from '@/types/WeatherTypes';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export function WeatherGraph({data}: { data: HourlyWeatherTypes[]}){
  
    const chartData = data.slice(0, 12).map(item => ({
        hour: new Date(item.dt * 1000).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        temp: Math.round(item.temp)
    }));

    return (
        <div className="w-full max-w-5xl mx-auto h-40 mt-4">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
            <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EAB308" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis 
                dataKey="hour" 
                hide={false} 
                axisLine={false} 
                tickLine={false} 
                interval={0}
                padding={{ left:10, right:10}}
                tick={{fill: '#9CA3AF', fontSize: 12}}
            />
            <YAxis hide={true} domain={['dataMin - 5', 'dataMax + 5']} />
            <Area 
                type="natural" 
                dataKey="temp"  
                stroke="#EAB308" 
                fillOpacity={1} 
                fill="url(#colorTemp)" 
                activeDot={false}
                strokeWidth={2}
                label={({ x, y, value }) => <text x={x} y={y} className='fill-slate-900 dark:fill-slate-200' fontSize={12} textAnchor="middle" dy={-10}>{value}°</text>}
            />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
}