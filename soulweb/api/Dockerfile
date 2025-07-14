# Dockerfile

FROM python:3.10

# Set working directory
WORKDIR /api

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all code
COPY . .

# Expose the port
EXPOSE 8000

# Default run command
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
