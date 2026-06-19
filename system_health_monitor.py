import psutil

cpu = psutil.cpu_percent()
memory = psutil.virtual_memory().percent
disk = psutil.disk_usage('/').percent

print("CPU Usage:", cpu, "%")
print("Memory Usage:", memory, "%")
print("Disk Usage:", disk, "%")

if cpu > 80:
    print("ALERT: CPU usage above 80%")

if memory > 80:
    print("ALERT: Memory usage above 80%")

if disk > 80:
    print("ALERT: Disk usage above 80%")
