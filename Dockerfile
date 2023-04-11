FROM dataformco/dataform

# Set working directory
ENV DATAFORM_DIR /dataform/
WORKDIR $DATAFORM_DIR

# Copy files to the image
COPY . $DATAFORM_DIR
COPY .df-credentials.json $DATAFORM_DIR

# Install the latest npm dependencies
RUN npm install

# Run the application
ENTRYPOINT ["dataform"]