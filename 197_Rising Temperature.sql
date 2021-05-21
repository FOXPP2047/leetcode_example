# Write your MySQL query statement below
select weather.id AS 'id'
from weather
join weather other on datediff(weather.recordDate, other.recordDate) = 1
and weather.Temperature > other.Temperature;