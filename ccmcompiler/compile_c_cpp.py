import subprocess
import os
from timeit import default_timer as timer
import json
import sys
import psutil
import languages as lan
import FolderChecker as FC

FC.checkdir(os.path.abspath('./'+sys.argv[3]+'/output'))
input_count = 1
com_language = dict()
result_list = list()
result = {"time": 0, "output": "", "memory" : "0","error" : "noerror",'answer' : 'X'} 
select = sys.argv[1]
timeout_sec = float(sys.argv[2])
com_language = lan.language(select,sys.argv[3]).compile_language

input_arr= list()
input_dir = os.listdir(os.path.abspath('./input'))
for file in input_dir:
    input_arr.append(os.path.abspath('./input/'+file))

path = com_language["compile"]["src_path"]
compile_arr = com_language["compile"]["compile_cmd"]

for file in input_arr:
    f = open("./"+sys.argv[3]+"/output/"+str(input_count)+".out",'w',encoding='UTF8')
    in_proc = subprocess.run(args=["type",file],shell=True,capture_output=True,encoding='UTF8')
    cmd_compile = subprocess.Popen(compile_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    (stdout,stderr) = cmd_compile.communicate()
    if(stderr.decode('UTF8') !=""):
        index = stderr.decode('UTF8').find('error')
        string = stderr.decode('UTF8')[index:]
        result['output'] = string
        json_data = json.dumps(result)
        result['error'] = "syntex error"
        print(json.dumps(result))

    else:
        run_arr = [com_language["run"]["command"]]
        start_time = timer()
        try:
            run = subprocess.Popen(args =run_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
            p = psutil.Process(run.pid)
            Memoryuse = p.memory_info()[0]
            (stdout, stderr) = run.communicate(timeout = timeout_sec,input=in_proc.stdout.encode('UTF8'))
            if(Memoryuse >= com_language["compile"]["max_memory"]):
                run.kill()
                result["error"]= "Memory"
                result["output"] = "Memory Overflow!!"
                result_list.append(result)
                input_count += 1
                continue
        except subprocess.TimeoutExpired:
            run.kill()
            result["error"]= "timeout"
            result["output"] = "TimeOut!"
            result_list.append(result)
            input_count += 1
            continue
        
        end_time = timer()
        run.kill()
        real_time = round(end_time - start_time,4)

        result['time'] = real_time
        if(stdout.decode('UTF8') == ""):
            index = stderr.decode('UTF8').find(',')
            string = stderr.decode('UTF8')[index+2:]
            result['output'] = string
            result['error'] = "run-time error"
        else:
            result['output'] = stdout.decode('UTF8')

        if(int(Memoryuse/(1000**2)) == 0):
            result['memory'] = str(Memoryuse/1000)+"KB"
        else:
            result['memory'] = str(Memoryuse/(1000**2))+"MB"

        f.write(result['output'].rstrip())
        f.close()
        check =  subprocess.Popen(args ="python answer_check.py", stdout=subprocess.PIPE, stderr=subprocess.PIPE,stdin=subprocess.PIPE)
        (stdout,stderr) = check.communicate(input = str(input_count).encode("utf8"))
        if(stdout.decode('utf8').rstrip() == "True"):
            result["answer"]="O"
        else:
            result["answer"] = "X"
        result_list.append(result)
    input_count += 1
    
print(json.dumps(result_list))