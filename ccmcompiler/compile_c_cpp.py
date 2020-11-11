import subprocess
import os
from timeit import default_timer as timer
import json
import sys
import psutil
import languages as lan
import FolderChecker as FC

#user name, 문제 number를 받아서 output폴더가 없으면 만들고, 있다면 안에 있는 .out 파일을 다 지우는 코드 추가하기
input_count = 1
com_language = dict()
result = {"time": 0, "output": "", "memory" : "0","error" : "noerror"} 
select = sys.argv[1]
timeout_sec = float(sys.argv[2])
com_language = lan.language(select).compile_language

input_arr= list()
input_dir = os.listdir(os.path.abspath('./input'))
for file in input_dir:
    input_arr.append(os.path.abspath('./input/'+file))

path = com_language["compile"]["src_path"]
compile_arr = com_language["compile"]["compile_cmd"]

for file in input_arr:
    # f = open(str(input_count)+".out",w)
    in_proc = subprocess.run(args=["type",file],shell=True,capture_output=True,encoding='CP949')
    cmd_compile = subprocess.Popen(compile_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    (stdout,stderr) = cmd_compile.communicate()
    if(stderr.decode('CP949') !=""):
        index = stderr.decode('CP949').find('error')
        string = stderr.decode('CP949')[index:]
        result['output'] = string
        json_data = json.dumps(result)
        result['error'] = "code"
        print(json.dumps(result))

    else:
        run_arr = [com_language["run"]["command"]]
        start_time = timer()
        try:
            run = subprocess.Popen(args =run_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
            p = psutil.Process(run.pid)
            Memoryuse = p.memory_info()[0]
            (stdout, stderr) = run.communicate(timeout = timeout_sec,input=in_proc.stdout.encode('CP949'))
            if(Memoryuse >= com_language["compile"]["max_memory"]):
                run.kill()
                result["error"]= "Memory"
                result["output"] = "Memory Overflow!!"
                print(json.dumps(result))
                continue
        except subprocess.TimeoutExpired:
            run.kill()
            result["error"]= "timeout"
            result["output"] = "TimeOut!"
            print(json.dumps(result))
            continue
        
        end_time = timer()
        run.kill()
        real_time = round(end_time - start_time,4)

        result['time'] = real_time
        if(stdout.decode('CP949') == ""):
            index = stderr.decode('CP949').find(',')
            string = stderr.decode('CP949')[index+2:]
            result['output'] = string
            result['error'] = "code"
        else:
            result['output'] = stdout.decode('CP949')

        if(int(Memoryuse/(1000**2)) == 0):
            result['memory'] = str(Memoryuse/1000)+"KB"
        else:
            result['memory'] = str(Memoryuse/(1000**2))+"MB"

        json_data = json.dumps(result)
        print(json_data)
        #f.write(result['output'][:-1])
