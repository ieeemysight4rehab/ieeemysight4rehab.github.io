## Getting Started
1. [Fork repository](https://github.com/ieeemysight4rehab/ieeemysight4rehab.github.io/fork) and clone it locally.
2. Change into the repo directory.
3. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data).

## Build your image with Docker
1. The Dockerfile and /nginix_config are already included
1. Issue the command
    docker build -t ieeemysight4rehab .
1. This will take some time
1. After its completed verify the image is there
<pre>
    docker images 
    REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
    ieeemysight4rehab            latest              dc21bfebeaee        10 minutes ago      241MB
</pre>
1. Rename the image after your GDG group
<pre>
    docker tag ieeemysight4rehab ieeemysight4rehab-web:v1 
    docker images
        REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
    ieeemysight4rehab-web   v1                  dc21bfebeaee        12 minutes ago      241MB
    vue-aura                latest              dc21bfebeaee        12 minutes ago      241MB
</pre>
## Deploy your image with Docker
1. Issue the command
<pre>
    docker run -d -p 80:80 ieeemysight4rehab-web:v1 
</pre>
1. Visit http://localhost


